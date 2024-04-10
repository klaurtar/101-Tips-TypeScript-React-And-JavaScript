const adminUsers = {
  databaseManager: 'Ted',
  contentManager: 'Sasha',
  analyticsManager: 'Donna',
  superAdmin: 'Ryan'
} as const;

type AllAdmins = typeof adminUsers[keyof typeof adminUsers]
// type AllAdmins = "Ted" | "Sasha" | "Donna" | "Ryan"

const dropDatabases = (admins: AllAdmins) => {
  // Delete everything
}

dropDatabases('John');
// Argument of type '"John"' is not assignable to parameter of type 'AllAdmins'.