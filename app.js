//DRY dont repeat yourself

// let count = 1;
// while (count <= 100) {
//     console.log(count)
//     count = count + 1;
// }

/** Write a for-loop that loops 1 to 20
 * If the number id divisible by 3, print "frontend"
 * If the number is divisible by 5, print "Simplified"
 * If the number is divisible by 3 and 5, print "Frontend Simplified"
 * If the number is *not* divisible by 3 or 5 , print the number 
 * 
 * @example1 
 * 
 * 1 -> 1 
 * 2 -> 2 
 * 3-> "Frontend"
 * 4 -> 4
 * 5 -> "Simplified"
 * ...
 * 15 -> "Frontend Simplified"
 * ...
 * 20 -> "Simplified"
 */

for (let i = 1; i <=20; ++i) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} -> Frontend Simplified`)
    }
    else if (i % 3 === 0) {
        console.log(`${i} -> Frontend`)
    }
    else if (i % 5 === 0) {
        console.log(`${i} -> Simplified`)
    }
    else {
        console.log(`${i} -> ${i}`)
    }
}