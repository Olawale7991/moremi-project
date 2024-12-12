import bcrypt from "bcrypt";
import validator from "validator";
import partnerModel from "../models/partnerModel.js";


const registerPartner = async (req, res) => {
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    country,
    companyName,
    state,
    role,
    message,
  } = req.body;

  
  try {

    if (!firstName || !lastName || !phoneNumber || !email || !password || !companyName || !role) {
      return res.status(400).json({ message: "All required fields must be provided." });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    const existingPartner = await partnerModel.findOne({ email });
    if (existingPartner) {
      return res.status(400).json({ message: "Partner with this email already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newPartner = await partnerModel.create({
      firstName,
      lastName,
      phoneNumber,
      email,
      password: hashedPassword,
      country,
      companyName,
      state,
      role,
      message,
    });

    res.status(201).json({
      message: "Partner registered successfully.",
      partner: {
        id: newPartner._id,
        firstName: newPartner.firstName,
        lastName: newPartner.lastName,
        email: newPartner.email,
        phoneNumber: newPartner.phoneNumber,
        companyName: newPartner.companyName,
        role: newPartner.role,
        message: newPartner.message,
      },
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred during partner registration." });
  }
};


  const loginPartner = async (req, res) => {
  
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    const partner = await partnerModel.findOne({ email });
    if (!partner) {
      return res.status(404).json({ message: "Partner not found." });
    }

    const isPasswordMatch = await bcrypt.compare(password, partner.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign(
      { id: partner._id, email: partner.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" } // Token expiration time
    );

    // Send a success response with the token
    res.status(200).json({
      message: "Login successful.",
      token,
      partner: {
        id: partner._id,
        firstName: partner.firstName,
        lastName: partner.lastName,
        email: partner.email,
        phoneNumber: partner.phoneNumber,
        companyName: partner.companyName,
        role: partner.role,
        message: partner.message,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred during login." });
  }
};

export {registerPartner, loginPartner}