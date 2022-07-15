/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import styled from 'styled-components';
import { useRouter } from 'next/router'

const Container = styled.div`
  &:hover {
    background-color: white;
  }
  -webkit-transition: background-color 300ms linear;
  -ms-transition: background-color 300ms linear;
  transition: background-color 300ms linear;
`;

const navigation = [
  { name: '국비지원컨설팅', href: 'home', current: false },
  { name: '소개', href: 'intro', current: false },
  { name: '신청대상', href: 'user', current: true },
  { name: '진행과정', href: 'process', current: true },
  { name: '신청하기', href: 'apply', current: true },
  // { name: '출석체크', href: 'attendance-check', current: false },
  // { name: '낙서장', href: 'graffiti', current: false },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}


export const Nav = () => {
  const history = useRouter();
  const [isScroll, setIsScroll] = useState(false);
  const changeBackground = () => {
    if(window.scrollY > 0 ) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }


  // useEffect(()=> {
  //   if (typeof window === 'undefined') {
  //     global.window = {}
  // }
  // },[])
  const goToViolation =(id: any)=>{
    const violation = document.getElementById(id); 
    if(violation) {
      window.scrollTo({
        top:violation.offsetTop,
        behavior:"smooth"
    });
    }
  };

  useEffect(() => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  },[]);

  const moveToTop = ()  => {
    window.location.reload();
  }
  
  //style={{backgroundColor:'rgb(09,10,23,0.8)'
  return (
    <Disclosure as="nav" id='nav'  >
      {({ open }) => (
        <Container className={classNames( 'fixed w-full text-gray-400  hover:text-gray-400  top-0 z-50')} style={{backgroundColor:'white', backgroundSize:'contain'}}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between h-20 items-center">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu buttonb */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-6 ">
                  {navigation.map((item) => (
                    <div
                      key={item.name}
                      className={classNames(
                        item.name ==='국비지원컨설팅' ? 'font-bold text-lg text-[18px]'  : 'text-[16px]' , 'px-3 py-2 rounded-md text-black cursor-pointer '
                      )}
                      // style={{fontSize: '16px', color: ''}}
                      aria-current={item.current ? 'page' : undefined}
                      onClick={() => {
                        goToViolation(item.href)
                      }}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
              {/* <div className="flex items-center">
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="text-black"
                  >
                    <img src={'https://storage.googleapis.com/opensea-static/Logomark/OpenSea-Full-Logo%20(light).svg'} 
                      className="h-6 mt-2"
                    />
                  </button>
                </div>
                
              </div> */}
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className={classNames(
                    item.name ==='국비지원컨설팅' ? 'font-bold' : '' , 'px-3 py-2 rounded-md text-black cursor-pointer '
                  )}
                  onClick={() => {
                    goToViolation(item.href)
                  }}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </Container>
      )}
    </Disclosure>
  )
}
