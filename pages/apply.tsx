import { MobileFooter } from "@components/MobileFooter";
import { Nav } from "@components/nav";
import useMutation from "@libs/client/useMutation";
import { NextPage } from "next";
import { useForm } from "react-hook-form";


// name String   //이름
//   phone String  //폰
//   alcohol String  //혈중알콜농도 (호흡 또는 체혈)
//   license String    //면허취득년도 
//   alcohol_history Boolean //과거 음주운전 전력
//   demerit String //벌점
//   distance String // 음주운전으로 이동한 거리
//   crackDown String  //적발일자
//   policeInterview String  //조사 날짜
//   reason String //  불가피한 운전 사유
//   job String  //직업 (월급, 월수입)
//   need String //운전이 필요한 이유
//   comment String //문의사항(면허구제,벌금감경,의견서작성 등)
const Apply: NextPage = () => {
  const [sendEmail, { loading, data, error }] = useMutation("/api/sendEmail");
  const { register, getValues, handleSubmit, control, formState: { errors } } = useForm();
  const onSubmit = (data:any) => {
     sendEmail({
      type: "진단신청",
      ...data
    })
    console.log(data)
    alert('진단신청이 완료됐습니다.');
    window.location.reload();
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
              <label htmlFor="name" className="block text-sm mb-1 ">
                이름
              </label>
              <input
                {...register("name", {
                  required: "비밀번호를 입력해주세요"
                })}
                name="name"
                type="name"
                required
                placeholder="이름"
                className="w-full border border-gray-400 h-10 px-2"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 px-5">
              <label htmlFor="phone" className="block text-sm mb-1 ">
                연락처
              </label>
              <input
                {...register("phone", {
                  required: "비밀번호를 입력해주세요"
                })}
                name="phone"
                type="phone"
                required
                placeholder="ex) 010-1234-5678"
                className="w-full border border-gray-400 h-10 px-2"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 px-5">
              <label htmlFor="alhoc" className="block text-sm mb-1 ">
                혈중 알콜농도 (호흡 또는 체혈)
              </label>
              <input
                {...register("alcohol", {
                  required: "혈중 알콜농도를 입력해주세요"
                })}
                name="alcohol"
                type="alcohol"
                required
                placeholder=" 0.1%"
                className="w-full border border-gray-400 h-10 px-2"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 px-5">
              <label htmlFor="email" className="block text-sm mb-1 ">
                면허 취득 년도
              </label>
              <input
                {...register("license", {
                  required: "면저취득년도를 입력해주세요"
                })}
                name="license"
                type="license"
                required
                placeholder="ex) 2022-10-12"
                className="w-full border border-gray-400 h-10 px-2"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 px-5">
              <label htmlFor="email" className="block text-sm mb-1 ">
                과거 음주운전 전력
              </label>
              <input
                {...register("alcohol_history", {
                  required: "과거 음주운전 전력 입력해주세요"
                })}
                name="alcohol_history"
                type="alcohol_history"
                required
                placeholder="ex) 있다 / 없다"
                className="w-full border border-gray-400 h-10 px-2"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 px-5">
              <label htmlFor="email" className="block text-sm mb-1 ">
                음주운전 사고 여부
              </label>
              <input
                {...register("accident", {
                  required: "과거 음주운전 전력 입력해주세요"
                })}
                name="accident"
                type="accident"
                required
                placeholder="Ex) 단독 / 대물 / 대인 - 피해자 병원에 간 때"
                className="w-full border border-gray-400 h-10 px-2"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 px-5">
              <label htmlFor="email" className="block text-sm mb-1 ">
                벌점
              </label>
              <input
                {...register("demerit", {
                  required: "벌점을 입력해주세요"
                })}
                name="demerit"
                type="demerit"
                required
                placeholder="ex) 200점"
                className="w-full border border-gray-400 h-10 px-2"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 px-5">
              <label htmlFor="email" className="block text-sm mb-1 ">
                음주운전으로 이동한 거리
              </label>
              <input
                {...register("distance", {
                  required: "음주운전으로 이동한 거리를 입력해주세요"
                })}
                name="distance"
                type="distance"
                required
                placeholder="ex) 1km"
                className="w-full border border-gray-400 h-10 px-2"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 px-5">
              <label htmlFor="email" className="block text-sm mb-1 ">
                적발 일자
              </label>
              <input
                {...register("crackDown", {
                  required: "적발 일자를 입력해주세요"
                })}
                name="crackDown"
                type="crackDown"
                required
                placeholder="ex) 2022-10-12"
                className="w-full border border-gray-400 h-10 px-2"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 px-5">
              <label htmlFor="email" className="block text-sm mb-1 ">
                경찰 조사 일자(혹은 조사 예정일)
              </label>
              <input
                {...register("policeInterview", {
                  required: "경찰 조사 일자를 입력해주세요"
                })}
                name="policeInterview"
                type="policeInterview"
                required
                placeholder="ex) 2022-10-12"
                className="w-full border border-gray-400 h-10 px-2"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 px-5">
              <label htmlFor="reason" className="block text-sm mb-1 ">
                불가피한 운전 사유
              </label>
              <textarea
                {...register(`reason`, {
                  required: "남기고 싶은 말을 적어주세요",
                })}
                name="reason"
                placeholder="불가피한 운전 사유를 입력해주세요."
                className="w-full border border-gray-400 h-24 px-2"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 px-5">
              <label htmlFor="email" className="block text-sm mb-1 ">
                직업 (월급, 월수입)
              </label>
              <input
                {...register("job", {
                  required: "직업 (월급, 월수입)을 입력해주세요"
                })}
                name="job"
                type="job"
                required
                placeholder="직업 및 월수입을 입력해주세요."
                className="w-full border border-gray-400 h-10 px-2"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 px-5">
              <label htmlFor="need" className="block text-sm mb-1 ">
                운전이 필요한 이유
              </label>
              <textarea
                {...register(`need`, {
                  required: "남기고 싶은 말을 적어주세요",
                })}
                name="need"
                placeholder="운전이 필요한 이유를 입력해주세요."
                className="w-full border border-gray-400 h-24 px-2"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 px-5">
              <label htmlFor="comment" className="block text-sm mb-1 ">
                문의사항(면허구제,벌금감경,의견서작성 등)
              </label>
              <textarea
                {...register(`comment`, {
                  required: "남기고 싶은 말을 적어주세요",
                })}
                name="comment"
                placeholder="문의사항을 입력해주세요."
                className="w-full border border-gray-400 h-24 px-2"
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