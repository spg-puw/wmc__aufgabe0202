#!/usr/bin/env node

// Define your JSON object.
export const meeting = {
    //TODO
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// *************************************************************************************************
// Wie viele Tage vor dem Meeting wurde die Einladung (invitationSent) gesendet? Schreibe das Ergebnis
// in die Variable invitationSendBeforeMeeting.
export function zeitBerechnen(meeting) {
    console.log("* Einladung vor dem Meeting ********************************************************");
    const invitationSendBeforeMeeting = 0; //TODO
    console.log(`   Die Einladung wurde ${invitationSendBeforeMeeting.toFixed(2)} Tage vor dem Meeting gesendet.`);
}

// *************************************************************************************************
// Weise die Anzahl der Teilnehmer der Variable attendeesCount zu.
export function anzahlTeilnehmer(meeting) {
    console.log("* Anzahl der eingeladenen Teilnehmer ***********************************************");
    const attendeesCount = 0; //TODO
    console.log(`   ${attendeesCount} Personen sind eingeladen.`);
}

// *************************************************************************************************
// Gib für jedes String Property im JSON Object den Wert aus. Verwende dafür eine Schleife, die
// das Objekt dynamisch durchgeht.
export function propsAnzeigen(meeting) {
    console.log("* String Properties und ihre Werte**************************************************");
    //TODO
}

// *************************************************************************************************
// Wer hat für das Meeting schon zugesagt, d. h. confirmed hat den Wert true? Verwende dafür eine
// Schleife, die das Array durchgeht. Der Title ist dynamisch auszugeben und nicht fix im Code
// einzutragen.
export function zugesagteTeilnehmer(meeting) {
    console.log("* Zugesagte Teilnehmer *************************************************************");
    //TODO
}

// *************************************************************************************************
// Wer hat für das Meeting definitiv abgesagt, d. h. confirmed hat den Wert false? Verwende dafür
// eine Schleife, die das Array durchgeht.
export function abgesagteTeilnehmer(meeting) {
    console.log("* Abgesagte Teilnehmer *************************************************************");
    //TODO
}

export default { meeting, zeitBerechnen, anzahlTeilnehmer, propsAnzeigen, zugesagteTeilnehmer, abgesagteTeilnehmer }

if (import.meta.url.endsWith(process.argv[1])) {
    zeitBerechnen(meeting);
    anzahlTeilnehmer(meeting);
    propsAnzeigen(meeting);
    zugesagteTeilnehmer(meeting);
    abgesagteTeilnehmer(meeting);
}