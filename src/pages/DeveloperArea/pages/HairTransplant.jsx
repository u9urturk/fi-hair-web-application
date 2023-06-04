import React from 'react'
import Analysis from '../components/Analysis'

export default function HairTransplant() {
    const image = [
        {
            url:process.env.PUBLIC_URL + "/sac-ekimi.png"
        },
        {
            url:process.env.PUBLIC_URL + "/analiz.png"
        }
    ]

    return (
        <div className='w-full  h-auto mb-28 flex flex-col items-center justify-center' >
            <div className='container flex flex-col items-start gap-y-20 py-20 px-20 justify-center'>
                <div className='px-12 py-8 bg-gradient-to-l from-gray-100 to-brand-color rounded-sm rounded-tl-3xl rounded-br-3xl'>
                    <strong className='font-serif tracking-widest  text-gray-500'>Saç Ekimi Hakkında Bilgilendirme</strong>
                </div>
                <div className='relative flex flex-col md:flex-row  items-center justify-center gap-x-10'>
                    <div className='flex flex-col items-center justify-center gap-y-4 text-2xl'>
                        <h1>Saç Ekimi Nedir ?</h1>
                        <p className='font-serif text-gray-500 text-sm'>

                            Saç ekimi veya saç restorasyonu saç nakli işlemi kişinin ön kısımda dökülmüş olan bölgelere her iki kulağın arasında bulunan ense bölgesinde ömür boyu dökülmeyecek olan saç köklerinin alınarak ön kısımda açılan kanallara yerleştirilmesi işlemidir.

                            Yani kişinin kendi saçlarının ense kısmından bir kısmının alınarak ön kısma nakledilmesi işleminin halk arasındaki adıdır.

                            Saç restorasyonu veya saç nakli işlemi de tıp dilindeki adıdır. Saç ekim işlemi şuan ki teknoloji ile kişinin kendi saç rezervi olan ensesinde bulunan saç köklerinin kullanılarak yapılması ile ortaya çıkan bir işlemdir.

                            Dolayısıyla kişinin ense bölgesindeki saçları ne kadar kuvvetli ne kadar sık ve ne kadar yoğun ise o şekilde alınıp ön bölgeye nakledilen saç miktarı da bu oranda fazla ve sık olabilmekte.

                            Böylece kişi eski görüntüsüne kavuşabilmektedir. <br /><br />
                            Erkeklerde ensedeki saç kökleri DHT hormonuna karşı duyarsız olduklarından daha az dökülürler. Vücudun diğer bölgelerinden alınan saç kökleri ise dökülmeme özelliğine sahip değildirler ve saç ekimi sonrasında tekrar dökülebilirler.

                            Ancak kadınlarda erkeklerdeki gibi dökülmeme özelliğine sahip bir alan bulunmamaktadır. Bu sebeple kadınlarda yapılacak saç ektirme başarı şansı erkeklerden daha azdır.

                            Nakledilmiş saçlar da kalıtımsal yapıdan etkileneceğinden zamanla döküleceği bilinmelidir.

                            Saç naklinde 1-4 saç hücresini barındıran saç köklerinin naklinin doktorlar tarafından yapılması gerekmektedir.

                            Bugün, 1-4 hücre içeren doğal saç köklerinin ileri tekniklerle alınıp grup olarak transfer edilmesine FUT “Follicular Unit Transplantation” denilmekte ve saç kaybı/kellik problemi olan kişiler tarafından bu yöntem hızla artan şekilde tercih edilmektedir.
                        </p>
                    </div>
                    <img className='w-[520px] mt-2 md:mt-0 rounded-3xl h-auto' src={image[0].url} alt="hakkinda" />
                </div>

                <div className=' flex items-center justify-center gap-x-10'>
                    <div className='flex flex-col items-start justify-center gap-y-4 text-2xl'>
                        <h1>Saç Ekiminin Tarihi </h1>
                        <p className='font-serif text-gray-500 text-sm'>


                            19. yüzyılda kafa derisinin operasyonla yüzülerek başka yere cerrahi aşılama yöntemi kullanılmaktaydı. Modern nakil tekniği 1930’lar da Japonya’da kaş ve kirpik naklinde kullanılmıştır. Yalnız bu yöntemi saç naklinde denememişlerdir.

                            II. Dünya Savaşın’dan sonra izole olmuş Japonya’nın bu çalışmalarından onlarca yıl dünyanın haberi olmamıştır. Modern çağın ilk saç nakli haberi, 1950’lerde New York’ta dermatolog Orentreich’in erkek denekler üzerinde saç nakli yapmaya başlaması ile duyuldu.

                            Öncesinde saçın nakil yapılması durumunda orijinali gibi gelişemeyeceği fikri yaygındı. Oysa Orentreich saçın geliştiğini ve kalıcı olduğunu denekler üzerinde gösterdi. Yirmi yıl boyunca cerrahlar saç aşılama konusunda çalıştı ancak bunların çok başarılı olduğu söylenemezdi.

                            1980’lerde Brezilya’lı Uebel saç naklini küçük çaplı da olsa kullanmaya başladı ve yöntem duyulmaya başladı. Esas popüler olması ise ABD’den Rassman’ın mikro cerrahi yöntemiyle bir seferde binlerce saç kökü nakli yapması ile başlamıştır.

                            1980’lerin sonunda Limmer, üç boyutlu mikroskop ile kafa derisini incelemiştir. İlk olarak 1988 yılında Japonya’da, Masumi Inaba tarafından tanıtılan 1mm’lik punçlarla yavaş yavaş tıp dünyasında kendine yer bulmaya başlayan FUE yöntemi, 2002 yılında William R. Rassman ve Robert M. Bernstein sayesinde tıbbi literatüründeki yerini almıştır.

                            2007 yılında ise Dr. Miquen G. Canales and Dr. David Berman tarafından Robotik FUE saç ekim yöntemi geliştirilmeye başlamıştır.
                        </p>
                    </div>
                </div>
                <div className=' flex items-center justify-center gap-x-10'>
                    <div className='flex flex-col items-start justify-center gap-y-4 text-2xl'>
                        <h1>Saç Ekiminin Yan Etkileri </h1>
                        <p className='font-serif text-gray-500 text-sm'>

                            <strong>Kanama:</strong>Greftlerin alındığı veya yerleştirildiği sahalardan kanama oluşabilir: Bu komplikasyonun olmaması için mutlaka işlemden önce hastanın kanama profili değerlendirilmeli buna yönelik gerekli laboratuvar incelemeleri yapılmalı ve kanamayı artırma potansiyeli olan ilaçlar operasyondan yeterince önce kesilmelidir.
                            <br /><br /> <strong>Enfeksiyonlar:</strong> Saç alınan veya ekilen sahalarda enfeksiyon gelişmesi çok nadir görülen komplikasyonlardır. Bunun nedeni kafa derisinin çok iyi kanlanması nedeni ile enfeksiyonlara olan doğal direncidir. Fakat bir enfeksiyon görülmesi halinde sistemik olarak verilen antibiyotiklerle tedavi edilmelidir.
                            <br /><br /> <strong>Saç köklerinin alındığı sahada kötü yara dokusu oluşması:</strong> FUT metodu ile yapılan saç nakillerinde daha çok görülür. Cildi müsait olanlarda veya kötü teknik kullanılanlarda görülme ihtimali daha yüksektir.
                            <br /><br /> <strong>Saç alınan sahada his kaybı: </strong>FUT tekniği uygulanan hastalarda nadiren görülebilir, uygun tedavilerle genellikle kaybolur.
                            <br /><br /> <strong>Dermoid kist:</strong> İşlemden birkaç hafta sonra belirirler, ekilen saç köklerinin fazla derine yerleştirilmesinden kaynaklanırlar. Ekim işlemini yapan kişi saç kökünü yerleştirmeden önce alıcı sahayı iyice bastırıp kökü daha sonra yerleştirerek işlemi yapmalıdır.
                            <br /><br /> <strong>Parke taşı görünümü: </strong>Ekilen köklerin saç derisinin üzerinde kalması durumunda oluşur. Saçlı deride kabarcıklar şeklinde bir görünüm oluşur.
                            <br /><br /> <strong>Yanlış yöne uzayan saçlar:</strong> Saçın ekildiği bölgedeki diğer saç köklerinin çıkış yönleri ile alakasız yönde uzayan saç kökleri genellikle kötü saç ekimi tekniğinden kaynaklanır. Ekim yapılırken saçın çıkış yönüne 30-35 derecelik açı yapacak şekilde ekilmemesi bu sorunun başlıca sebebidir.
                            <br /><br /> <strong>Hızlanmış saç kaybı:</strong> Saç kökleri ekilirken çevredeki diğer saç köklerinin zedelenmesinden kaynaklanabileceği gibi; saç ekim operasyonunun stresinden de kaynaklanabilir. Operasyon sırasında mutlaka keskin aletler kullanılmalı, körleşmiş aletler hemen değiştirilmelidir.
                            <br /><br /><br /> Yukarıda başlıcaları sıralanan komplikasyonların görülme riskini en aza indirmek için mutlaka işin ehli kişilerle çalışılmalıdır.
                        </p>
                    </div>
                </div>
                <div className=' flex flex-col md:flex-row items-center justify-center gap-x-10'>
                    <div className='flex flex-col items-start justify-center gap-y-4 text-2xl'>
                        <h1>Teşhis ve Analiz </h1>
                        <p className='font-serif text-gray-500 text-sm'>

                            Saç ekimine karar vermeden önce saç restorasyon cerrahı saçlı deriyi inceleyerek saç kaybının nedenlerini araştırtırır.

                            Eğer inceleme sonucunda cerrah saç dökülme sebebi olarak kadın ya da erkek tipi genetik dökülmeden başka sebep olabileceği konusunda şüpheleniyorsa, diğer teşhise yönelik araştırmaları yaparak altta yatan nedeni ortaya çıkarır.

                            Saç kaybına neden olan sebep tedavi edildikten sonra kayıp yaşanan alana saç ekimi ameliyatı yapılır. <br /><br />
                            
                            <strong>Saç çekme testi:</strong> 25-50 tel kadar saç ele alınır ve parmak uçlarıyla hafifçe çekilerek her seferinde ne kadar saç geldiğine bakılır . Normalde birkaç tel gelmesi gerekirken öbek öbek saç dökülmesi varsa anormal bir durumdan şüphelenilmeli; saç dipleri mikroskop altında incelenerek saç gövdesi ve kökü/dibi araştırılmalı.

                            Saç çekme testi sırasında her çekmede ele gelen kıl sayısı 5 ve üzeri ise “telojen effluvium”a bağlı olarak saç dökülmesi artmıştır. Telojen effluviuma bağlı dökülmeler geri dönebilir; nedenleri hamilelik, stres, ilaç kullanımı gibi sebepler olabilir. Bu tür dökülmeler stresden 3 ay sonra görülür ve toplam saç miktarının %30-%50 sini etkiler. Bu durumda günlük dökülme miktarı (normalde 50-100 tel) 300 saç teli veya daha fazla olabilir.

                           <br /><br /> <strong>Fototrikogram:</strong> Saçlar kliplenerek ya da bir alanda kesilerek 3-5 gün aralıklarla yakın fotoğrafları çekilir ve büyüme paternlerine bakılır.

                           <br /><br /> <strong>Saç penceresi : </strong>Saçlar kliplenerek ya da bir alanda kesilerek saç büyümesi 3-30 gün içinde gözlemlenir.Saç döngüsü konusunda fikir edinilir.

                            Saç büyüme döngüsündeki anormalliğe bağlı saç kaybı az fakat her yaşta görülebilir. Saç büyüme döngüsünü etkileyerek saç kaybına neden olabilecek durumlar arasında tiroid hastalıkları, besin yetersizliği, bazı ilaçların yan etkileri, kansızlık, bazı sistemik hastalıklar ve psikolojik stres sayılabilir.

                           <br /><br /><strong> Deri biopsisi:</strong> Pek nadir gerekli olsa da bazı sikatrisyel alopesilerin (deride saç folikülü kaybı ile görülen kayıplar) tanımlanması ve saç dökebilecek infiltratif deri hastalıklarının teşhis edilmesi için gerekli olabilir.

                           <br /><br /><strong> Saç kılı değerlendirmesi:</strong> Eğer saç kılı gövdesinde bir anormallik ya da enfeksiyondan şüphe ediliyorsa o zaman saç kılı deriden koparılarak mikroskop altında incelenir. Mantar, bakteri veya virüs enfeksiyonları saç kıllarında kırılma/dağılma şeklinde görülebilen saç kayıplarına yol açabilir.

                            <br /><br /><strong>Saç analizi:</strong> Bir laboratuar testidir. Saç gövdesi anomalilerinde nedeni anlamak için saçın biyokimyasal analizi yapılır. Genetik olarak değişmiş saç-protein profili ve/veya ilaç alımı ya da ağır metal zehirlenmesi gibi durumların saç dökülmesi nedeni olup olmadığını anlamak için güvenilir bir testtir. Sistemik hastalıkların teşhisi ya da beslenme problemlerini ortaya koymak için yapılmaz.

                        </p>
                    </div>
                    <img className='w-[520px] mt-4 md:mt-0 rounded-3xl h-auto' src={image[1].url} alt="hakkinda" />
                </div>
            </div>
            <Analysis></Analysis>
        </div>
    )
}
