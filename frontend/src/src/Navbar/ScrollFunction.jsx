


const [scrolling, setScrolling] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if(window.scrollY > 0){
      setScrolling(true);
    }else{
      setScrolling(false);
    }
  };
  window.addEventListener('scroll',handleScroll);

  return () => {
    //Cleanup the event listener when the component unmounts
    window.removeEventListener('scroll',handleScroll);
  };
}, []); //empty dependency arry means the effect runs only once on mount and cleans up on unmount

export default handleScroll;