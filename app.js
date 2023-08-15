var friends = ['Quili', 'Kur', 'Primo', 'Ale', 'Lucho'];

for (let i = 0; i < friends.length; i++) {
    for (let j = 99; j > 0; j--) {
        console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file.");
        if (j == 1) {
            console.log(j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file.");
        }
    }
};