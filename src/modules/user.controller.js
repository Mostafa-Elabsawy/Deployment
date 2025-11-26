import { User_Model } from "../../DB/models/user.js";
export const getAllUsers = async (req, res) =>
{
    try
    {
        const users = await User_Model.find({}).select("-__v -_id");
        res.status(200).json({ state: "success", Number: users.length, users });
    }
    catch (error)
    {
        res.status(500).json({ state: "failed", message: error.message });
    }
};
export const addUser = async (req, res) =>
{
    const { name, email, bio } = req.body;
    try
    {
        const newUser = await User_Model.create({ name, email, bio });
        res.status(201).json({state:"success", newUser});
    }
    catch (error)
    {
        res.status(500).json({state:"failed", message: error.message});
    }
    
};