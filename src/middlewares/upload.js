import multer from "multer";
import crypto from "crypto";


    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './public/img')
        },
        filename: function (req, file, cb) {
           
            const extensaoArquivo = file.originalname.split('.')[1];

            const novoNomeArquivo = crypto.randomBytes(64).toString('hex');
    
            cb(null, `${novoNomeArquivo}.${extensaoArquivo}`)
        }
    });

const Upload = multer({ storage });

export default Upload;
