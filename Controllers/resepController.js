import ResepModel from "../model/resepModel.js";

export const listResep = async (req, res) => {
  try {
    const data = await ResepModel.find({});
    res.status(200).json({
      message: "List resep makanan",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

export const createNewResep = async (req, res) => {
  try {
    const request = req.body;

    const response = await ResepModel.create({
      recipeName: request.recipeName,
      ingredients: request.ingredients,
      instructions: request.instructions, // ✅ sesuaikan nama schema kamu
    });

    res.status(201).json({
      message: "Resep makanan berhasil dibuat",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

export const updateResep = async (req, res) => {
  try {
    const id = req.params.id;
    const request = req.body;

    if (!id) {
      return res.status(400).json({
        message: "ID wajib diisi",
        data: null,
      });
    }

    const response = await ResepModel.findByIdAndUpdate(
      id,
      {
        recipeName: request.recipeName,
        ingredients: request.ingredients,
        instructions: request.instructions,
      },
      { new: true }
    );

    if (!response) {
      return res.status(404).json({
        message: "Resep makanan tidak ditemukan",
        data: null,
      });
    }

    res.status(200).json({
      message: "Resep makanan berhasil diupdate",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

export const deleteResep = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        message: "ID wajib diisi",
        data: null,
      });
    }

    const response = await ResepModel.findByIdAndDelete(id);

    if (response) {
      return res.status(200).json({
        message: "Resep makanan berhasil dihapus",
        data: response,
      });
    }

    res.status(404).json({
      message: "Resep makanan tidak ditemukan",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};
