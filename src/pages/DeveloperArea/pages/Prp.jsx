import React from 'react'

export default function Prp() {
    const image = [
        {
            url: process.env.PUBLIC_URL + "/prp-1.jpg"
        },
        {
            url: process.env.PUBLIC_URL + "/prp-2.jpg"
        },
    ]
    return (
        <div className='w-full h-auto mb-28 flex items-center justify-center' >
            <div className='container flex flex-col items-start gap-y-20 py-20 px-20 justify-center'>
                <div className='px-12 py-8 bg-gradient-to-l from-gray-100 to-brand-color rounded-sm rounded-tl-3xl rounded-br-3xl'>
                    <strong className='font-serif tracking-widest  text-gray-500'>PRP(Platelet Rich Plasma)</strong>
                </div>
                <div className=' flex items-center justify-center gap-x-10'>
                    <div className='flex flex-col items-start justify-center gap-y-4 text-2xl'>

                        <p className='font-serif text-gray-500 text-sm'>

                            <strong>PRP Saç Tedavisi Nedir?</strong>

                            <br />&nbsp;&nbsp;&nbsp; PRP’nin açılımı Platelet Rich Plasma’dır ve saç PRP yönteminde bireyin kendi kanından alınan materyallerin saçlı deriye uygulanması ile saç köklerinin onarılması hedeflenir.

                            <br /> Saç PRP uygulaması, az süre içerisinde büyük faydalar sağlayarak, saç kaybının önlenmesinde uygulanan en iyi yöntemlerden biri haline gelmiştir.

                            <br /> PRP yönteminde saç köklerini onarmak için kişinin kendi kanı kullanıldığı için herhangi bir bulaşıcı hastalık riski bulunmamaktadır. Bunun yanı sıra herhangi bir alerjik durumda da söz konusu sac-prpolmamaktadır. Uygulama ardından saç köklerindeki canlanma oldukça kısa sürelerde oluşmaktadır.  Saç PRP uygulaması sonrasında saç dokusu gelişmeye başlar, incelmiş ve yıpranmış saç folikülleri onarılır. Bu sayede de saçlar tekrardan sağlıklı günlerine geri döner.

                            <div>
                                <img className='w-[300px] rounded-3xl h-auto float-right' src={image[0].url} alt="hakkinda" />
                                <br /><br /><br /><strong> Saç PRP Nasıl Yapılır ?</strong>
                                <br />&nbsp;&nbsp;&nbsp;Öncelikle kişiden 10 ml. kan alınır.
                                <br /> Alınan kan özel olarak geliştirilen santrifüj ve mikrofiltrasyon yöntemleri ile kanda bulunan kırmızı hücreler ayrıştırılır.
                                <br /> Bu işlemden sonra ise platelet ve trombosit hücrelerinden zengin bir plazma materyali ortaya çıkar ve elde edilen bu materyal artık saç köklerine uygulanabilir.
                                <br /> Cerrahi uygulama sonrasında saç kökleri kendini onarmaya başlar ve tekrardan sağlıklı hallerine geri döner.
                                <br /> PRP kısaca hastanın kendi kanını kullanarak yeni saç çıkması, saç dökülmesinin önlenmesi ve incelmiş saçın büyümesi üzerine oluşturulmuş yeni tedavi tekniğidir. Bu kesinlikle bir ameliyat değildir, ayakta tedavi yöntemlerine benzer bir uygulamadır.
                            </div>

                            <br /><br /><br /><strong>PRP Saç Çıkarır Mı ?</strong>
                            <br />&nbsp;&nbsp;&nbsp;Hiç saçı olmayanlar yani kısacası kel olanlar için PRP tedavisi saç uzamaya başlar mı? Diye akıllarda bu soru vardır. Hayır, kesinlikle saç çıkartmaz. Saç ekiminden başka saçsız olan bölgede saç oluşumu sağlamak kesinlikle mümkün değildir. Saç PRP tedavisinde fiyat değişkenlik göstermektedir.

                            <br /> Prp tedavisi var olan fakat uzamayan, boyadan fönden ya da herhangi sebeplerden dolayı güçsüz saçlar için geliştirilen bir tedavi yöntemidir. Saçların kalınlaşmasına ve güçlenmesine yardımcı olur.

                            <br /><br /><br /><strong>PRP yöntemi tercih nedenleri</strong>

                            <ul className='pl-8 list-disc'>
                                <li>İncelmiş ve güçsüzleşen saç tellerini onarır.</li>
                                <li>Saç köklerini kalınlaştırır.</li>
                                <li>Saç uzamasına yardımcı olur.</li>
                                <li>Saç dokusunu onarır.</li>
                                <li>Yıpranmış saçların zaman içinde canlanmasını sağlar.</li>
                                <li>Saç folikülü canlılığını arttırır.</li>
                                <li>Saçı dökülmelere karşı korur.</li>
                            </ul>

                            <br /><br /><br /><strong>PRP Saç Tedavisi Faydaları</strong>
                            <br />&nbsp;&nbsp;&nbsp; Hücresel bir tedavi şekli olarak kullanılmaya başlanılan bu yöntem kişi ya da kişilerin kendi kan hücrelerinden faydalanılarak oluşturulan bir tedavi uygulamasıdır. PRP'nin faydalarına gelecek olursak eğer özellikle kişinin ince saçlarının oluştuğu cilt bölgelerinde trombositlerin bu bölgeye sağladıkları keratinosit ve de epitelyal büyüme etkenleri sayesinde doğru sonuçları görmenizi sağlar.

                            Bu tedavi yöntemi sayesinde incelen yani zayıflamış saçlar bu uygulama sonrasında saç köklerinin kalınlaşmasına ve de hacimli bir hale gelmesini sağlar. Saç mezoterapisi de diğer farklı teknikler arasında yer almaktadır.

                            <br /><br /><br /><strong>PRP UYGULAMASI SAÇ EKİMİ İLE UYGULANABİLİR Mİ?</strong>
                            <br />&nbsp;&nbsp;&nbsp;Saç PRP uygulaması FUE saç ekim yöntemini destekleyici ve takviye edici olarak uygulanabilmektedir. Saç ekimi sonrasında saç derisi ile kıl köklerinin uyum sürecini hızlandırabilmekte ve ekilen saçların daha iyi beslenmesini sağlamaktadır. Ekimi yapılan saçların daha sıkı bir şekilde saç derisine tutunmasını sağlayarak tekrar dökülme yaşanması olasılığını azaltmaktadır. Saç ekiminin ardından 15 ile 20 gün içerisinde uygulanması halinde saç ekiminden alınan verimi maksimize eder ve saç ekiminden beklenen sonucun ortaya çıkmasına yardımcı olur. Bunun yanı sıra saç ekimi ardından iyileşme sürecini de hızlandırdığı bilinmektedir. Gözle görülür etkileri ise 3. seanstan sonra oluşmaktadır.

                            <div className='relative'>
                                <img className='w-[500px] absolute rounded-3xl -z-10 opacity-50 right-10 h-auto ' src={image[1].url} alt="hakkinda" />
                                <br /><br /><br /><strong> SAÇ PRP İŞLEMİ KAÇ SEANS UYGULANMALIDIR?</strong>
                                <br />&nbsp;&nbsp;&nbsp; Saç PRP uygulaması uzun süre etkili bir tedavi yöntemidir. Fakat bilinmelidir ki ömür boyu etkili değildir. Kişiden kişiye göre değişmekle birlikte ortalama olarak 1 yıl etkili olabilmektedir. Bu süreç ayrıca kişinin saç bakımına ve beslenmesine bağlı olarak uzayabilmektedir. Saç PRP uygulaması genetik saç dökülmesi yaşayan kişilerde daha sık aralıklarla uygulanması makuldür. Bunun haricinde 1 yıllık aralıklarla uygulanırsa olumlu etkileri katlanarak devam edecektir.
                            </div>

                            <br /><br /><br /><strong> SAÇ PRP UYGULAMASI FİYATLARI</strong>
                            <br />&nbsp;&nbsp;&nbsp;  Saç PRP uygulamasının fiyatları uygulamanın yapıldığı merkeze göre değişkenlik göstermektedir. Ayrıca uygulamanın seans sayısı fiyatı etkileyen başlıca unsurlar arasındadır. Bu yüzden uygulama kararı verdikten sonra iyi bir araştırma sürecinin ardından hekiminizle veya karar kıldığınız merkezle birebir konuşmanız sizin açınızdan çok faydalı olacaktır.

                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
