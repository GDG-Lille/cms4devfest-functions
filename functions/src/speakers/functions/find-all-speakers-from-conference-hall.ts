import * as functions from 'firebase-functions';
import editionsService from '../../editions/business/services/editions.service';

export default (data, context) => {
    const editionId = data.editionId;
    console.log('editionId', editionId);

    if (editionId === undefined) {
        throw new functions.https.HttpsError('invalid-argument', 'Required editionId field in the request.');
    }

    return editionsService.findOne(editionId)
        .then(edition => editionsService.findOneOnConferenceHall(edition.conferenceHall.eventId, edition.conferenceHall.apiKey))
        .then(edition => edition.speakers);
};
