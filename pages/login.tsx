import useAuth from "@/hooks/useAuth";
import Head from "next/head"
import Image from "next/legacy/image"
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  email: string
  password: string
}

function login() {
  const [login, setLogin] = useState(false)
  const { signIn, signUp } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>() 

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data)
    if (login) {
      await signIn(data.email, data.password)
    } else {
      await signUp(data.email, data.password)
    }
  }

  return (
    <div className="relative flex flex-col h-screen w-screen bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
      </Head>

      <Image
        src="/images/login.jpg"
        layout="fill"
        className="-z-10 !hidden sm:!inline opacity-60"
        objectFit="cover"
        alt=""
      />

      <img src="/images/logo.png" alt="Logo" className="top-4 left-4 md:top-6 object-contain md:left-12 absolute cursor-pointer"
        height={167} width={167}
      />

      <form 
      onSubmit={handleSubmit(onSubmit)}
      className="relative space-y-8 rounded mt-20 bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-16">
        
        <h1 className="text-4xl font-semibold">Sign In</h1>

        <div className="space-y-4">
          <label className="inline-block w-full">
            <input type="email" placeholder="Email" {...register('email', { required: true })}
              className={`input ${errors.email && 'border-b-2 border-orange-500'}`}/>
            
            {errors.email && (
              <p className="p-1 text-[13px] text-orange-500">
                Please enter a valid email.
              </p>
            )}
          </label>

          <label className="inline-block w-full">
            <input type="password" placeholder="Password" {...register("password", { required: true })} 
              className={`input ${errors.password && 'border-b-2 border-orange-500'}`} />
            
            {errors.password && (
              <p className="p-1 text-[13px] text-orange-500">
                Your password must contain between 4 and 60 characters.
              </p>
            )}
          </label>

          </div>

          <button className="bg-red-600 py-3 font-semibold rounded hover:bg-red-700 transition w-full"
          onClick={() => setLogin(true)}
          >
            Sign In
          </button> 

          <div className="text-[gray]">
            New to Netflix?
            <button type="submit" className="text-white hover:underline ml-1" onClick={() => setLogin(false)}>
              Sign up now
            </button>
          </div>  

      </form>
    </div>
  )
}

export default login
