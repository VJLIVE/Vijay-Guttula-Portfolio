const Footer = () => {
  return (
    <footer className="w-full py-6 border-t border-border/50">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Alex Doe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
