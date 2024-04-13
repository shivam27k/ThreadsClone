import AccountProfile from '@/components/forms/AccountProfile'
import { currentUser } from '@clerk/nextjs'

async function Page() {
	const user = await currentUser()

	const userInfo = {
		_id: '',
		username: '',
		name: '',
		bio: '',
		image: '',
	}

	const userData = {
		id: user?.id || '',
		objectId: userInfo?._id || '',
		username: userInfo?.username || user?.username || '',
		name: userInfo?.name || user?.firstName || '',
		bio: userInfo?.bio || '',
		image: userInfo?.image || user?.imageUrl || '',
	}

	return (
		<main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
			<h1 className="head-text">Onboarding</h1>
			<p className="mt-3 text-light-2 text-base-regular">
				Let's crochet your profile with dhaaga
			</p>
			<section className="bg-dark-2 mt-9 p-10">
				<AccountProfile user={userData} btnTitle={'Continue'} />
			</section>
		</main>
	)
}

export default Page
