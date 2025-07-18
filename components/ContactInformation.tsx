import { Card, CardContent, CardHeader } from './ui/card'
import { Github, Instagram, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function ContactInformation() {
  return (
    <>
    {/* Contact Information Card */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Contact Information</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-chart-4" />
            <span>email@example.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-chart-4" />
            <span>Tasikmalaya, Indonesia</span>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <h2 className="text-xl font-semibold">Social</h2>
        </CardHeader>
        <CardContent>
          <div className="items-center space-x-3">
            <p>Let's connect</p>
            <div className='flex space-x-3 pt-3'>
            <Link href="https://github.com/Raka-coder">
              <Github className="w-6 h-6 text-chart-4" />
            </Link>
            <Link href="https://www.instagram.com/rakresptra/">
              <Instagram className="w-6 h-6 text-chart-4" />
            </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
