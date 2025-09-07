import { generateCaption } from "../services/ai.service.js";
export async function generateCaptionController(req, res, next) {
    try {
        
        const caption = await new Promise((resolve, reject) => {
            generateCaption(req.file)
                .then((caption) => resolve(caption))
                .catch((err) => reject(err));
        });


        res.status(200).json({
            caption: caption,
        });

    } catch (error) {
        next(error);
    }
}