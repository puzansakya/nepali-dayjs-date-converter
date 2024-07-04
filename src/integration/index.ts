import dayjs from 'dayjs';
import { promises as fs } from 'fs';
import { readFileSync } from 'fs';
import path from "path"
import {differenceInCalendarDays} from "date-fns"
const fetch = async () => {
    try {
        let x = []
        const fres = await fs.readdir(path.join(__dirname, "./mock"))

        
        fres.forEach(item => {
            let mm = []
            
            
            // let first = "";
            // let last = "";
            
            let sum = 0;
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].forEach(async num => {
                // if(num ===1) {
                //     first = 
                // }

                const x = readFileSync(path.join(__dirname, `./mock/${item}/${num}.json`), "utf-8");



                const parsed = JSON.parse(x)
                console.log(parsed.metadata.en);

                let hasO = false
                const dx = parsed.days.map(o => o.n).filter(o => {
                    if (o === "१") {
                        hasO = true
                    }
                    return o && hasO && o.length >= 1
                })

                sum += dx.length

                mm.push(dx.length)
            });

            mm.push(sum)
            mm.push(333)

            x.push(
                `daysInMonthMap.set(${item}, [0, ${mm.join(", ")}]);`
            )

        });

        console.log(JSON.stringify(x.join("&&&"), null, 2))


    } catch (error) {
        console.log(error)
    }

}

 const engFetch = () => {
    const result = differenceInCalendarDays(
        new Date(),
        new Date("1943-04-13")
      )
      console.log(result)

    const x = dayjs().diff("1943-04-14", "day")
    console.log(x)
    return  
}

export const main = async () => {
    await fetch()
    // await engFetch()


}