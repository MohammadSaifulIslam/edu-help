import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Gallery = () => {
    const images = [
        
        {
          src: 'https://img.freepik.com/free-photo/medium-shot-colleagues-posing-together_23-2148950574.jpg?w=740&t=st=1690133299~exp=1690133899~hmac=09df85976c6050cf7675eae3c1dd06f8fd72d2289ce8a96756c1ae4461358dbc',
          alt: 'Campus Life Captured',
        },
        {
          src: 'https://img.freepik.com/free-photo/portrait-group-students-celebrating-their-graduation_23-2148201834.jpg?w=740&t=st=1690135594~exp=1690136194~hmac=48feb6b00e49f1b79b0321d97edc8a592ad9a641d6a2a14fe955036971454edd',
          alt: 'Campus Life Captured',
        },
        {
          src: 'https://img.freepik.com/free-photo/group-diverse-grads-throwing-caps-up-sky_53876-56031.jpg?w=740&t=st=1690133806~exp=1690134406~hmac=8cac0412caee9a3993c3b3df12038dd827cb54d7169e4b00230f2bd0dbef397d',
          alt: 'Campus Life Captured',
        },
        {
            src: 'https://img.freepik.com/free-photo/group-diverse-grads-throwing-caps-up-sky_53876-56031.jpg?w=740&t=st=1690133806~exp=1690134406~hmac=8cac0412caee9a3993c3b3df12038dd827cb54d7169e4b00230f2bd0dbef397d',
            alt: 'Campus Life Captured',
        },
        {
            src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            alt: 'Campus Life Captured',
        },
        {
          src: 'https://img.freepik.com/free-photo/medium-shot-colleagues-posing-together_23-2148950574.jpg?w=740&t=st=1690133299~exp=1690133899~hmac=09df85976c6050cf7675eae3c1dd06f8fd72d2289ce8a96756c1ae4461358dbc',
          alt: 'Campus Life Captured',
        },
    ];
  return (
    <section className="my-container mt-20">
      
        <SectionTitle title={'Gallery'} subTitle={'Campus Life Captured: Relive Memorable University Moments in Our Gallery. Experience the vibrant spirit of university life through captivating images. '}/>
        
        <div className="grid  grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
           <div key={index} className="overflow-hidden">
             <div  className={`relative h-80 hover:scale-125 duration-700 `}>
             <img
                src={image.src}
                alt={image.alt}
                className=" h-full w-full object-cover rounded-md "
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="bg-white p-2 rounded-md">
                  <p className="text-gray-800 text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
           </div>
          ))}
        </div>
    </section>
  );
};

export default Gallery;
