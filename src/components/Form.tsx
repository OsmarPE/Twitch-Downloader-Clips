'use client'
import { getIdByUrlTwitchClip, validateURL } from '@/helper/utils'
import { ArrowDownToLine } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { formUrlType } from '../../types'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { revalidateTag } from 'next/cache'

export default function Form() {

    const router = useRouter()

    const { register, formState: { errors }, handleSubmit, setError, watch } = useForm<formUrlType>()


    const onSubmit = async (search: formUrlType) => {

        const { error, data } = validateURL.safeParse(search.url)

        if (error) {
            setError('url', { message: error.issues[0].message })
            return
        }

        const id = getIdByUrlTwitchClip(data)
        
        router.push(`/main/${id}`)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className='max-w-2xl mx-auto'>
            <div className='flex flex-col md:flex-row gap-4'>
                <input {...register('url', { min: 4, required: 'Enter your url to twitch' })} className='md:flex-1 outline-none transition-all duration-300 placeholder:text-sm border border-transparent hover:border-[#58505C] focus:border-[#58505C] h-[50px] px-4 rounded-lg bg-grayMain-foreground placeholder:text-grayMain text-slate-300' type="text" placeholder='https://clips.twitch.tv' />
                <div className='flex'>
                    <button className='flex h-[50px] md:h-auto justify-center items-center gap-2 px-4 rounded-lg bg-[#6A00EC] text-white font-medium duration-300 transition-all hover:bg-[#6A00EC]/70'>
                        <span>Generate</span>
                        <ArrowDownToLine className='size-5' />
                    </button>
                    
                </div>
            </div>
            {errors.url && <span className='text-sm text-left block mt-1 text-red-400'>{errors.url?.message}</span>}
        </form>
    )
}
