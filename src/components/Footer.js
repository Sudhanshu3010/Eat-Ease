const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a href="https://www.linkedin.com/in/tejas-mete-782b6521a/" target="_blank">
        Sudhanshu Sonare
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <strong>
        Eat<span>Ease</span>
      </strong>
    </div>
  );
};

export default Footer;
