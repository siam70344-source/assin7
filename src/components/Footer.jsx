export default function Footer() {
  return (
    <footer className="bg-[#1D3D31] text-white mt-16 py-12 text-center">
      <img src="/assets/logo-xl.png" alt="KeenKeeper Large" className="mx-auto mb-4 w-48" />
      <p className="mt-3 text-gray-300 max-w-md mx-auto text-sm">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>

      <div className="flex justify-center gap-6 mt-8">
        {/* We use invert-0 or grayscale-0 if the icons are already styled for dark backgrounds */}
        <a href="#"><img src="/assets/instagram.png" alt="Instagram" className="w-6 h-6 hover:opacity-80" /></a>
        <a href="#"><img src="/assets/facebook.png" alt="Facebook" className="w-6 h-6 hover:opacity-80" /></a>
        <a href="#"><img src="/assets/twitter.png" alt="Twitter" className="w-6 h-6 hover:opacity-80" /></a>
      </div>

      <div className="mt-10 border-t border-gray-700/50 pt-8 flex flex-col md:flex-row justify-between px-10 text-xs text-gray-400">
        <p>© 2026 KeenKeeper. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookies</span>
        </div>
      </div>
    </footer>
  );
}