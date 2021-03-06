export const goToLoginPage = (history) => {
    history.push("/login");
};

export const goToListTripPage = (history) => {
    history.push("/trips/list");
};

export const goBack = (history) => {
    history.goBack()
};

export const goToApplicationFormPage = (history) => {
    history.push("/trips/application")
};

export const goToCreateTripPage = (history) => {
    history.push("/admin/trips/create")
};

export const goToAdminHomePage = (history) => {
    history.push("/admin/trips/list")
};

export const goToTripDetailsPage = (history, id) => {
    history.push(`/admin/trips/${id}`)
}