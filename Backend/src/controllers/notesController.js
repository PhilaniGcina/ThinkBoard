import Note from  "./models/Note.js"

export async function getAllnotes(req,res){
    try {
        const notes = await Note.find()
        res.status(200).json(notes)
    
    } catch (error) {
        console.error("Error in getAllNotes controller", error)
        res.status(500).json({message:"internal server error : "});
    }};

export function createNote(req,res){
    res.status(201).json({message:"Notes created successfully !"});
};

export function updateNote(req,res){
    res.status(200).json({message:"Notes updated successfully !"});
};

export function deleteNote(req,res){
    res.status(200).json({message:"Notes deleted successfully !"});
};