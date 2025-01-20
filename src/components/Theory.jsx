import React, { useState, useRef, useEffect } from "react";

const Theory = () => {
  const [showReliability, setShowReliability] = useState(false); // Track if reliability section is shown
  const reliabilityRef = useRef(null); // Reference for the reliability section

  // Close the reliability section if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        reliabilityRef.current &&
        !reliabilityRef.current.contains(event.target)
      ) {
        setShowReliability(false); // Close reliability section
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
        className="reliability-button"
        onClick={() => setShowReliability(!showReliability)}
      >
        {showReliability ? "Hide reliability" : "Show reliability"}
      </button>
      {showReliability && (
        <div className="reliability" ref={reliabilityRef}>
          <h2>Reliability</h2>
          <p>Here are the guidelines for using the application:</p>
          <ul>
            <li>Use the dropdowns to filter data by system, antenna, or year.</li>
            <li>Enter a keyword to search specific records.</li>
            <li>Click "Filter Rows" to see updated metrics and charts.</li>
            <li>Ensure valid data is uploaded in the correct format.</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Theory;
