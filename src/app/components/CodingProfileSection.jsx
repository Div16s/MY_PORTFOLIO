import { SiCodeforces } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

const CodingProfileSection = () => {
    return (
        <div id="codingProfile" className="grid md:grid-cols-1 my-12 md:my-12 py-10 gap-4 relative">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Coding Profile
            </h2>
            <div className="flex flex-row justify-center items-center gap-6">
                <div>
                    <Link href="https://codeforces.com/profile/Divyankar">
                        <div className="socials flex flex-col gap-4 justify-center items-center">
                            <Image src="/images/codingProfile/code-forces.png" width={40} height={40} />
                            <h2 className="font-normal">CodeForces</h2>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link href="https://www.codechef.com/users/divshah_16">
                        <div className="socials flex flex-col gap-4 justify-center items-center">
                            <SiCodechef size={40} />
                            <h2 className="font-normal">CodeChef</h2>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link href="https://leetcode.com/Div16s/">
                        <div className="socials flex flex-col gap-4 justify-center items-center">
                            <Image src="/images/codingProfile/leetcode.png" width={40} height={40} />
                            <h2 className="font-normal">LeetCode</h2>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CodingProfileSection