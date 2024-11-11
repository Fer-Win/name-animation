const FerwinAnimation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [startX, setStartX] = useState(0);
    const [endX, setEndX] = useState(window.innerWidth); // Use window width for full-screen effect
    const [textColor,setTextColor] = useState('#fff');  // Initial white color
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsVisible(true);
        setStartX(-endX); // Start from off-screen left
      }, 1000); // Start animation after 1 second
  
      return () => clearTimeout(timeout);
    }, [endX]); // Dependency on endX for responsive behavior
  
    const variants = {
      hidden: { opacity: 0, x: startX },
      visible: { opacity: 1, x: endX, transition: { duration: 1, ease: 'easeInOut' } }, // Animate opacity and position over 1 second
      colorChange: { color: textColor, transition: { duration: 0.5 } } // Separate transition for color change
    };
  
    const handleColorChange = () => {
      const newColor = textColor === '#fff' ? '#ff0000' : '#fff'; // Toggle between white and red
      setTextColor(newColor);
    };
  
    return (
      <div className="animation-container">
        <motion.h1
          className="title"
          variants={variants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          onClick={handleColorChange} // Trigger color change on click
        >
          Ferwin
        </motion.h1>
        <button onClick={handleColorChange}>Change Color</button>
      </div>
    );
  };
  