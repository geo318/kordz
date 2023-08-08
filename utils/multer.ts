import multer from 'multer'

const storage = multer.diskStorage({
  destination: './public/originals/',
  filename: (_, file, cb) =>
    cb(null, `${Date.now()}-${file.originalname.trim().replace(/\s/g, '-')}`),
})

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
})
export default upload
