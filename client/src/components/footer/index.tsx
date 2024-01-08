import Container from "../container";

const heading = `text-xl font-bold mb-5 relative before:content-[''] before:absolute 
  before:bottom-0 before:left-0 before:w-10 before:h-1 before:-mb-2 before:bg-accent-500`;

const listItemGap = "flex flex-col gap-5";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="pt-10 text-white bg-primary-600">
      <Container>
        <div className={`flex gap-5 mb-8 flex-wrap`}>
          <div className="flex-1">
            <h2 className={`${heading}`}>Features</h2>
            <ul className={`${listItemGap}`}>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="flex-1">
            <h2 className={`${heading}`}>Resources</h2>
            <ul className={`${listItemGap}`}>
              <li>Blog</li>
              <li>Developer</li>
              <li>Support</li>
              <li>Docs</li>
            </ul>
          </div>
          <div className="flex-1">
            <h2 className={`${heading}`}>Company</h2>
            <ul className={`${listItemGap}`}>
              <li>About</li>
              <li>Our Team</li>
              <li>Carrer</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex-1">
            <h2 className={`${heading}`}>Partners</h2>
            <ul className={`${listItemGap}`}>
              <li>About</li>
              <li>Our Team</li>
              <li>Carrer</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </Container>
      <div className="py-3 text-center bg-primary-700">
        <p>&copy; ${year} All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
