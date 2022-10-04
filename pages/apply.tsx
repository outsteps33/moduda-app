import { MobileFooter } from "@components/MobileFooter";
import { Nav } from "@components/nav";
import { NextPage } from "next";
import { useForm } from "react-hook-form";


const Apply: NextPage = () => {
  const { register, getValues, handleSubmit, control, formState: { errors } } = useForm();
  const onSubmit = (data:any) => {
    console.log(data)
  }
  const inValid = () => {
    console.log(errors)
  }
  return (
    <div >
      <Nav />
      <div className="block md:grid md:grid-cols-2 gap-12">
        <div className="px-5 md:grid md:justify-center pt-32 md:pt-36">
          <div className="text-sm">
            <div className="text-2xl font-bold sm:text-xl md:text-2xl lg:text-3xl">무료 구제 성공 가능성 진단</div>
            <div className="mt-5">안녕하세요. <span className="font-bold" >모두다행정사</span>입니다.</div>
            <div><span style={{color:'#0054EB'}}>구제 성공 가능성 진단</span>을 위해 오른쪽 양식을 작성해주세요.</div>
            <div>작성된 양식을 통해 구제 가능성 검토가 진행됩니다.</div>
            <div className="mt-4">확실한 진단을 위해 진실된 내용을 꼼꼼히 작성 부탁드립니다.</div>
            <div>모두다행정사가 구제하는 것은 의뢰인의 '간절함'입니다.</div>
            <div className="mt-4">꼭 도움이 되어 드리겠습니다.</div>
          </div>
        </div>
        <form className="space-y-2 mt-5 md:pr-48 md:pt-28" onSubmit={handleSubmit(onSubmit, inValid)}>
          <div>
            <div className="mt-2 px-5">
              <label htmlFor="email" className="block text-sm mb-1 ">
                선택항목
              </label>
              <input
                {...register("email", {
                  required: "이메일을 입력해주세요",
                  minLength: 10,
                  validate: (email: any) =>email.includes("@")
                })}
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full"
              />
            </div>
          </div>

          <div>
            <div className="mt-2 px-5">
              <label htmlFor="email" className="block text-sm mb-1 ">
                성명
              </label>
              <input
                {...register("password", {
                  required: "비밀번호를 입력해주세요"
                })}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 px-5">
              <label htmlFor="email" className="block text-sm mb-1 ">
                성명
              </label>
              <input
                {...register("password", {
                  required: "비밀번호를 입력해주세요"
                })}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 px-5">
              <label htmlFor="email" className="block text-sm mb-1 ">
                연락처
              </label>
              <input
                {...register("password", {
                  required: "비밀번호를 입력해주세요"
                })}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 px-5">
              <label htmlFor="email" className="block text-sm mb-1 ">
                혈중 알콜농도 (호흡 또는 체혈)
              </label>
              <input
                {...register("password", {
                  required: "비밀번호를 입력해주세요"
                })}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 px-5">
              <label htmlFor="email" className="block text-sm mb-1 ">
                면허 취득 년도
              </label>
              <input
                {...register("password", {
                  required: "비밀번호를 입력해주세요"
                })}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 px-5">
              <label htmlFor="email" className="block text-sm mb-1 ">
                과거 음주운전 전력
              </label>
              <input
                {...register("password", {
                  required: "비밀번호를 입력해주세요"
                })}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 px-5">
              <label htmlFor="email" className="block text-sm mb-1 ">
                음주운전 중 사고여부
              </label>
              <input
                {...register("password", {
                  required: "비밀번호를 입력해주세요"
                })}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 px-5">
              <label htmlFor="email" className="block text-sm mb-1 ">
                1년 이내 받은 벌점 (모를 시 '모름'으로 표시)
              </label>
              <input
                {...register("password", {
                  required: "비밀번호를 입력해주세요"
                })}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 px-5">
              <label htmlFor="email" className="block text-sm mb-1 ">
                음주운전으로 이동한 거리
              </label>
              <input
                {...register("password", {
                  required: "비밀번호를 입력해주세요"
                })}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 px-5">
              <label htmlFor="email" className="block text-sm mb-1 ">
                적발 일자
              </label>
              <input
                {...register("password", {
                  required: "비밀번호를 입력해주세요"
                })}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 px-5">
              <label htmlFor="email" className="block text-sm mb-1 ">
                경찰 조사 일자(혹은 조사 예정일)
              </label>
              <input
                {...register("password", {
                  required: "비밀번호를 입력해주세요"
                })}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 px-5">
              <label htmlFor="email" className="block text-sm mb-1 ">
                불가피한 운전 사유
              </label>
              <textarea
                {...register(`answer2`, {
                  required: "남기고 싶은 말을 적어주세요",
                })}
                name="answer2"
                defaultValue={''}
                className="w-full"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 px-5">
              <label htmlFor="email" className="block text-sm mb-1 ">
                직업(월수입)
              </label>
              <textarea
                {...register(`answer2`, {
                  required: "남기고 싶은 말을 적어주세요",
                })}
                name="answer2"
                defaultValue={''}
                className="w-full"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 px-5">
              <label htmlFor="email" className="block text-sm mb-1 ">
                운전이 필요한 이유
              </label>
              <textarea
                {...register(`answer2`, {
                  required: "남기고 싶은 말을 적어주세요",
                })}
                name="answer2"
                defaultValue={''}
                className="w-full"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 px-5">
              <label htmlFor="email" className="block text-sm mb-1 ">
                문의한 사항
              </label>
              <textarea
                {...register(`answer2`, {
                  required: "남기고 싶은 말을 적어주세요",
                })}
                name="answer2"
                defaultValue={''}
                className="w-full"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 px-5">
              <label htmlFor="email" className="block text-sm mb-1 ">
                개인정보의 수집 및 이용목적
              </label>
            
            </div>
          </div>
          <div className="px-5">
            <button className="text-white py-3 text-center mb-40 rounded-md  w-full" style={{backgroundColor: '#0054EB'}}>
              진단서 제출하기
            </button>
          </div>
        </form> 
      </div>

      <MobileFooter />
    </div>
  )
}

export default Apply;