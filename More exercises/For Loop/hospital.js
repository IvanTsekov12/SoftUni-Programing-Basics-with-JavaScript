function hospital(input){
    let index = 0;
    let period = Number(input[index]);
    index++;
    let treatedPatients = 0;
    let patientsLeft = 0;
    let doctors = 7;

    for (let day = 1; day <= period; day++){
        if (day % 3 === 0 && patientsLeft > treatedPatients){
            doctors++;
        }
        let patientsCount = Number(input[index]);
        index++;

        if (patientsCount >= doctors){
            treatedPatients += doctors;
            patientsLeft += Math.abs(doctors - patientsCount);
        } else {
            treatedPatients += patientsCount;
        }
    }

    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${patientsLeft}.`);
}

hospital(["3", "7", "7", "7"]);