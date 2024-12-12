import agesci from '@/images/groups/agesci.png'
import masci from '@/images/groups/masci_home.png'
import Image from 'next/image'

export default function Logo({ className = 'h-12 w-12' }) {
  return (
    <div className="flex items-center justify-center">
      <Image src={agesci} alt="agesci" className={className} />
      <Image src={masci} alt="masci" className={className} />
    </div>
  )
}
