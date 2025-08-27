import SocialLinks from "./SocialLinks"

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <SocialLinks />
          <div className="text-center">
            <p className="text-muted-foreground">© {new Date().getFullYear()} Tirth A. Jadav All rights reserved.</p>
            
          </div>
        </div>
      </div>
    </footer>
  )
}
