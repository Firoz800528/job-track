import { useEffect } from "react";

const useTitle = title => {
  useEffect(() => {
    document.title = `${title} | JobTrack`;
  }, [title]);
};

export default useTitle;
