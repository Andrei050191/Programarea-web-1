
function grantAccess(isAdmin, isOwner) {
	if (isAdmin || isOwner) {
		return "Access granted";
	} else {
		return "Access denied";
	}
}
