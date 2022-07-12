import event from '../models/event';

export const getEvents = async(req, res) => {
    const events = await event.find();
    res.json(events);
}

export const createEvent = async (req, res) => {
    const {titleEvent, descriptionEvent, startDate, endDate, idTeamWin, idTeamLoser, winPoints, loserPoints} = req.body;
    const newEvent = new event({titleEvent, descriptionEvent, startDate, endDate, idTeamWin, idTeamLoser, winPoints, loserPoints});
    const eventSave = await newEvent.save();
    res.status(201).json(eventSave);
}

export const getEventById = async (req, res) => {
    const eventupdate = await event.findById(req.params.idEvent);
    res.status(200).json(eventupdate);
}

export const updateEventById = async (req, res) => {
    const updatedEvent = await event.findByIdAndUpdate(req.params.idEvent, req.body, {
        new: true,
    });
    res.status(200).json(updatedEvent);
}