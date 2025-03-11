import React from 'react'

const page = () => {
  return (
    <div className='my-32 px-6 min-h-screen'>
      <h1 className='text-center text-4xl font-semibold text-primary my-10'>About MANIT</h1>

      <p className='my-5 leading-6 tracking-wide lg:w-4/5 mx-auto' style={{wordSpacing : "4px"}}>Maulana Azad National Institute of Technology, Bhopal, commonly known as MANIT or NIT Bhopal, is an Institute of National Importance under the Ministry of Education, Government of India. Established in 1960 as Maulana Azad College of Technology (MACT), it was among the first regional engineering colleges in India. In 2002, it was upgraded to a National Institute of Technology and was granted the status of a deemed university. The institute is named after Maulana Abul Kalam Azad, a prominent freedom fighter and India’s first Minister of Education.</p>
      <p className='my-5 leading-6 tracking-wide lg:w-4/5 mx-auto' style={{wordSpacing : "4px"}}>Spread over an area of 650 acres, MANIT Bhopal is one of the largest technical institutions in Central India. It offers undergraduate, postgraduate, and doctoral programs in engineering, science, management, and architecture. The academic structure is divided into various departments, including Computer Science & Engineering, Electrical Engineering, Mechanical Engineering, Civil Engineering, Architecture & Planning, and more.</p>
      <p className='my-5 leading-6 tracking-wide lg:w-4/5 mx-auto' style={{wordSpacing : "4px"}}>MANIT Bhopal has a strong research ecosystem, with collaborations with industry and government bodies. It has well-equipped laboratories, research centers, and a Central Library with an extensive collection of books, journals, and digital resources.

        The institute has a dedicated Training and Placement Cell, which facilitates campus placements and internships. Top recruiters include multinational companies such as Microsoft, Amazon, Tata Consultancy Services, Infosys, L&T, and various PSUs.

        The campus has modern infrastructure, including hostels, sports facilities, auditoriums, and innovation labs. Various student clubs, technical societies, and cultural events contribute to an active campus life.</p>

        <p className='my-5 leading-6 tracking-wide lg:w-4/5 mx-auto' style={{wordSpacing : "4px"}}>MANIT Bhopal continues to be a significant contributor to India’s technical and scientific progress, producing skilled professionals and researchers in various fields.</p>

        <div className='w-full lg:w-4/5 mx-auto my-10'>
          <img src="https://conf.manit.ac.in/visionzerosummit/assets/img/img1.jpg" className='w-full object-contain' alt="manit image" />
        </div>
    </div>
  )
}

export default page