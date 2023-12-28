import pluginsObject from "./plugins.js";
import { paths } from "./variables.js";

const {
  newer,
  optipng,
  mozjpeg,
  imagemin,
  gulp: { src, dest },
} = pluginsObject;

const {
  project: { rasterImg },
  made: { imgFolder },
} = paths;

const makeImages = () => {
  return src(rasterImg)
    .pipe(newer(imgFolder))
    .pipe(
      imagemin([
        optipng({ optimizationLevel: 3 }),
        mozjpeg({ quality: 75, progressive: true }),
      ])
    )
    .pipe(dest(imgFolder));
};

export default makeImages;
