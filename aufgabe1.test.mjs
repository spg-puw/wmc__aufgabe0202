import t from './aufgabe1.mjs'

describe('meeting Objekt', () => {
    test('datum', () => {
        expect(t.meeting.date).toBe("2022-04-12T10:45:00+02:00");
        expect(t.meeting.title).toBe("Meeting: Konzeption des Frontends");
    });

    test('location', () => {
        expect(t.meeting.location?.street).toBe("Spengergasse 20");
        expect(t.meeting.location?.zip).toBe(1050);
        expect(t.meeting.location?.city).toBe("Wien");
    });
    
    test('attendees', () => {
        expect(t.meeting.attendees.length).toBe(3);
        expect(t.meeting.attendees[1].firstname).toBe("Ilario");
    });
});

describe("Funktionen", () => {
    const log = console.log;

    beforeEach(() => {
        console.log = import.meta.jest.fn(); // create a new mock function for each test
    });

    afterAll(() => {
        console.log = log; // restore original console.log after all tests
    });

    test("Einladung vor dem Meeting", () => {
        t.zeitBerechnen(t.meeting);
        expect(console.log).toHaveBeenCalledWith(
            expect.stringContaining(`Die Einladung wurde 9.74 Tage vor dem Meeting gesendet.`)
        );
    });

    test("Anzahl der eingeladenen Teilnehmer", () => {
        t.anzahlTeilnehmer(t.meeting);
        expect(console.log).toHaveBeenCalledWith(
            expect.stringContaining(`3 Personen sind eingeladen.`)
        );
    });

    test("String Properties und ihre Werte", () => {
        t.propsAnzeigen(t.meeting);
        expect(console.log).toHaveBeenCalledWith(
            expect.stringContaining(`Das Property date ist ein String mit dem Wert "2022-04-12T10:45:00+02:00"`)
        );
        expect(console.log).toHaveBeenCalledWith(
            expect.stringContaining(`Das Property invitationSent ist ein String mit dem Wert "2022-04-02T14:54:12Z"`)
        );
        expect(console.log).toHaveBeenCalledWith(
            expect.stringContaining(`Das Property title ist ein String mit dem Wert "Meeting: Konzeption des Frontends"`)
        );
    });

    test("Zugesagte Teilnehmer", () => {
        t.zugesagteTeilnehmer(t.meeting);
        expect(console.log).toHaveBeenCalledWith(
            expect.stringContaining(`Cyrillus Landre hat für das Meeting "Meeting: Konzeption des Frontends" zugesagt.`)
        );
    });

    test("Abgesagte Teilnehmer", () => {
        t.abgesagteTeilnehmer(t.meeting);
        expect(console.log).toHaveBeenCalledWith(
            expect.stringContaining(`Geoff Georgiev hat für das Meeting "Meeting: Konzeption des Frontends" abgesagt.`)
        );
    });
    
    test("dynamisch", () => {
        const m = structuredClone(t.meeting);
        m.title = "test";
        m.attendees[0].firstname = "Max";
        m.attendees[2].lastname = "Mustermann";
        m.attendees.push({ firstname: "X", lastname: "Y"});
        m.invitationSent = "2022-04-01T01:02:03Z";
        t.zeitBerechnen(m);
        t.anzahlTeilnehmer(m);
        t.zugesagteTeilnehmer(m);
        t.abgesagteTeilnehmer(m);

        // log(console.log.mock.calls);

        expect(console.log).toHaveBeenCalledWith(
            expect.stringContaining(`Die Einladung wurde 11.32 Tage vor dem Meeting gesendet.`)
        );
        expect(console.log).toHaveBeenCalledWith(
            expect.stringContaining(`4 Personen sind eingeladen.`)
        );
        expect(console.log).toHaveBeenCalledWith(
            expect.stringContaining(`Max Landre hat für das Meeting "test" zugesagt.`)
        );
        expect(console.log).toHaveBeenCalledWith(
            expect.stringContaining(`Geoff Mustermann hat für das Meeting "test" abgesagt.`)
        );
    });
});