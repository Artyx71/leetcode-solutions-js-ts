var findMedianSortedArrays = function(arr1, arr2) {
    const l1 = arr1.length;
    const l2 = arr2.length;
    
    const totalL = l1 + l2;
    const med1 = Math.floor((totalL - 1) / 2), med2 = Math.floor(totalL / 2);
    
    let i = 0;
    let j1 = 0;
    let j2 = 0;
    
    const medians = [];
    
    while(i <= med2) {
        const ith = (arr1[j1] !== undefined && arr2[j2] !== undefined) ? Math.min(arr1[j1], arr2[j2]) : (arr1[j1] !== undefined ? arr1[j1] : arr2[j2])
        
        if (i === med1) {
            medians.push(ith);
        }
        if (i === med2) {
            medians.push(ith);
        }
        
        if (j1 >= l1) {
            j2++;
        } else if (j2 >= l2) {
            j1++;
        } else if (arr1[j1] < arr2[j2]) {
            j1++;
        } else {
            j2++;
        }

        i++;
    }
    
    return (medians[0] + medians[1]) / 2;
};