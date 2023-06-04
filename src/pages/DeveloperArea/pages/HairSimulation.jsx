import React from 'react'
import Icon from '../../../components/Icon'
import Button from '../../../components/Button'

export default function HairSimulation() {
    return (
        <div className='relative w-full h-auto mb-4 flex items-center justify-center' >
            <div className='container flex flex-col items-start gap-y-20 py-20 px-20 justify-center'>
                <div className='px-12 py-8 bg-gradient-to-l from-gray-100 to-brand-color rounded-sm rounded-tl-3xl rounded-br-3xl'>
                    <h1 className='font-serif tracking-widest font-semibold  text-gray-500'>Saç Simülasyonu</h1>
                </div>
                <div className='flex flex-col  items-center justify-center gap-x-10'>
                    <div className='flex flex-col z-[1] items-start justify-center gap-y-4 font-serif text-gray-500 text-sm'>

                        <p>
                            Saç simülasyonu, saç dökülmesi veya seyrek saçlı bölgeleri kamufle etmek için kullanılan yenilikçi bir kozmetik uygulamadır. Bu yöntem, saç derisine özel pigmentlerin enjekte edilerek saç izlenimi yaratmayı amaçlar.
                        </p>
                        <p>
                            Saç simülasyonu, hem erkeklerde hem de kadınlarda saç dökülmesi sorunu yaşayanlara estetik bir çözüm sunar. Bu yöntem, saç çizgisini belirginleştirmek, seyrek saçlı bölgeleri dolgunlaştırmak ve saç derisindeki renk farklılıklarını gizlemek için kullanılır. Saç simülasyonu, doğal görünümüyle dikkat çeker ve saç dökülmesi problemi olan kişilere daha yoğun ve kalıcı bir saç izlenimi verir.
                        </p>
                        <p>
                            Saç simülasyonu, deneyimli bir uzman tarafından gerçekleştirilir. Uygulama, saç derisine özel olarak seçilen pigmentlerin ince iğnelerle enjekte edilmesiyle yapılır. Bu pigmentler, doğal saç rengine uygun şekilde seçilir ve saç derisiyle uyumlu bir görünüm elde etmek için hassas bir şekilde dağıtılır.
                        </p>
                        <p>
                            Saç simülasyonu, cerrahi olmayan bir yöntemdir ve genellikle ağrısızdır. Uygulama süresi kişinin saç dökülmesinin derecesine ve tedavi edilecek bölgenin büyüklüğüne bağlı olarak değişebilir. Sonuçlar hemen fark edilir ve genellikle uzun süreli bir etkiye sahiptir.
                        </p>
                        <p>
                            Saç simülasyonu, doğal ve kalıcı bir saç izlenimi sağlayarak saç dökülmesi sorunu yaşayanlara özgüvenlerini geri kazandırır. Bu yöntem, saç ekimi için uygun olmayan kişilere veya ek tedavi yöntemleri arayanlara ideal bir seçenek olabilir.
                        </p>
                        <p>
                            Unutmayın, saç simülasyonu bir uzmanlık gerektiren bir işlemdir. Güvenilir bir saç simülasyonu sağlayıcısı seçmek ve uygulamanın en iyi sonuçlarla gerçekleştirilmesini sağlamak önemlidir. Bu şekilde, saç simülasyonu ile doğal ve etkileyici bir saç izlenimine sahip olabilirsiniz.
                        </p>
                    </div>
                    <div className='absolute opacity-40 flex items-center justify-center gap-x-3'>
                        <Icon name={'fihair-logo-new'} title={'logo'} width={200}></Icon>
                        <div className='space-x-1'>
                            <strong className='text-5xl font-medium font-serif tracking-widest'>Fi</strong>
                            <strong className='text-5xl font-medium text-brand-color font-serif tracking-widest'>Hair</strong>

                        </div>
                    </div>
                    <div className='w-full h-12 mt-12 bg-brand-color text-white md:opacity-50 hover:opacity-100 transition-all active:scale-95 rounded-2xl flex items-center justify-center'>
                        <a  href="https://wa.me/905387088040" target="_blank">Ayrıntılı Bilgi İçin Tıklayınız</a>
                    </div>
                </div>
            </div>
        </div>

    )
}
