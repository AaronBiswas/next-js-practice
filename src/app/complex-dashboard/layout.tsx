export default function Layout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>

      <div className="flex items-center justify-between">
        {users}
        {revenue}
        {notifications}
      </div>
    </div>
  );
}
