import React, { useState,useRef, useEffect} from "react";
const Guideliness = () => {
  const [showGuidelines, setShowGuidelines] = useState(false); // Track if guidelines are shown
  const guidelinesRef = useRef(null); // Reference for the guidelines section

  // Close the guidelines if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        guidelinesRef.current &&
        !guidelinesRef.current.contains(event.target)
      ) {
        setShowGuidelines(false); // Close guidelines
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);
      // Clean up event listener
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

  return (
    <>
      <button
        className="guideline-button"
        onClick={() => setShowGuidelines(!showGuidelines)}
      >
        {showGuidelines ? "Hide Guidelines" : "Show Guidelines"}
      </button>
      {showGuidelines && (
        <div className="guidelines" ref={guidelinesRef}>
          <h2>Guidelines</h2>
          <p>Here are the guidelines for using the application:</p>
          <ul>
            <li>
              Use the dropdowns to filter data by system, antenna, or year.
            </li>
            <li>Enter a keyword to search specific records.</li>
            <li>Click "Filter Rows" to see updated metrics and charts.</li>
            <li>Ensure valid data is uploaded in the correct format.</li>
          </ul>
        </div>
      )}
      
    </>
  );
};

export default Guideliness;
