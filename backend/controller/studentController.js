import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import validator from 'validator';
import studentModel from '../models/studentModel.js';


const registerStudent = async (req, res) => {
  const { firstName, lastName, phoneNumber, email, password, message } = req.body;

  try {
    // Validate input fields
    if (!firstName || !lastName || !phoneNumber || !email || !password) {
      return res.status(400).json({ message: "All required fields must be filled" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (!validator.isMobilePhone(phoneNumber.toString(), 'any')) {
      return res.status(400).json({ message: "Invalid phone number" });
    }

    if (!validator.isStrongPassword(password)) {
      return res.status(400).json({
        message: "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a symbol",
      });
    }

    // Check if email already exists
    const existingStudent = await studentModel.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new student
    const newStudent = new studentModel({
      firstName,
      lastName,
      phoneNumber,
      email,
      password: hashedPassword,
      message,
    });

    // Save student to the database
    await newStudent.save();

    // Generate JWT token
    const token = jwt.sign(
      { id: newStudent._id, email: newStudent.email },
      process.env.JWT_SECRET, // Ensure you have this in your .env file
      { expiresIn: '1d' }
    );

    res.status(201).json({
      message: "Student registered successfully",
      student: { id: newStudent._id, firstName, lastName, email },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred during registration" });
  }
};

const loginStudent = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
      }
  
      if (!validator.isEmail(email)) {
        return res.status(400).json({ message: "Invalid email format." });
      }
  
      const student = await studentModel.findOne({ email });
      if (!student) {
        return res.status(404).json({ message: "Student not found." });
      }
  
      const isPasswordMatch = await bcrypt.compare(password, student.password);
      if (!isPasswordMatch) {
        return res.status(401).json({ message: "Invalid credentials." });
      }
  
      // Generate a JWT token
      const token = jwt.sign(
        { id: student._id, email: student.email },
        process.env.JWT_SECRET,
        { expiresIn: "1d" } 
      );
  
      res.status(200).json({
        message: "Login successful.",
        token,
        student: {
          id: student._id,
          firstName: student.firstName,
          lastName: student.lastName,
          email: student.email,
          phoneNuber: student.phoneNumber,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred during login." });
    }
  };


export {registerStudent,loginStudent }