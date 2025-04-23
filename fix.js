import fs from "fs";
import path from "path";

const svgFolder = path.join(process.cwd(), "src/assets/svgs"); // Update folder path

fs.readdir(svgFolder, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  files.forEach((file) => {
    if (path.extname(file) === ".svg") {
      const filePath = path.join(svgFolder, file);
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          console.error("Error reading file:", file, err);
          return;
        }

        let cleanedSVG = data
          .replace(/\s+xmlns:xlink="[^"]*"/g, "") // Remove `xmlns:xlink`
          .replace(/\s+xlink:href="[^"]*"/g, "") // Remove `xlink:href`
          .replace(/\s+xml:space="[^"]*"/g, "") // Remove `xml:space`
          .replace(/\s+xmlns="http:\/\/www.w3.org\/2000\/svg"/g, "") // Remove redundant `xmlns`
          .replace(/\s+xmlns:xhtml="[^"]*"/g, "") // Remove `xmlns:xhtml`
          .replace(/\s+version="[^"]*"/g, "") // Remove `version` (React doesn't need it)
          .replace(/xlink:href/g, "href"); // Replace `xlink:href` with `href` (React-compatible)

        fs.writeFile(filePath, cleanedSVG, "utf8", (err) => {
          if (err) {
            console.error("Error writing file:", file, err);
          } else {
            console.log("Fixed:", file);
          }
        });
      });
    }
  });
});
