const parseBookmarksJson = ( bookmarksData ) => {
    // create array of all categories
    let catArray = []
    // 
    let sortable = []

    // take each bookmark object's categories and join them into larger array of all categories including duplicates
    for ( let i = 0; i < bookmarksData.length; i++) {
        catArray = catArray.concat(bookmarksData[i].category)
    }
    // reduce array of categories into an object that contains each word as key and value of # of hits
    let counts = catArray.reduce(( prev, curr ) => {
        prev[curr] = (prev[curr] || 0) + 1
        return prev
    }, {})

    // creating sortable an array of 2 item arrays [[keyword,count],[keyword,count]]
    for (var keyword in counts) {
        sortable.push([keyword, counts[keyword]])
    }

    // sort by the second item in array the `count` so that the most frequent keyword is first
    sortable.sort(function(a, b) {
        return b[1] - a[1]
    })
    
    return sortable
}

export default parseBookmarksJson