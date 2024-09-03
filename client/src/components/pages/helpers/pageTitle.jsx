import { useEffect } from "react";

export default function updatePageTitle(title = "") {
  useEffect(() => {
    document.title =
      title.length == 0 ? "Gisa Designs" : `Gisa Designs | ${title}`;
  }, []);
}
