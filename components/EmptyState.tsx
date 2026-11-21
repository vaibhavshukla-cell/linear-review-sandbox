import React from "react";

export interface EmptyStateProps {
  title: string;
  description?: string;
  illustration?: React.ReactNode;
  action?: React.ReactNode;
}

export function EmptyState({
  title,
  description,
  illustration,
  action,
}: EmptyStateProps) {
  return (
    <div
      role="status"
      className="flex flex-col items-center justify-center px-6 py-16 text-center"
    >
      {illustration && (
        <div className="mb-6 text-neutral-300">{illustration}</div>
      )}
      <h3 className="text-base font-medium text-neutral-900">{title}</h3>
      {description && (
        <p className="mt-1 max-w-sm text-sm text-neutral-500">{description}</p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}

export function ReviewsEmptyState() {
  return (
    <EmptyState
      title="You're all caught up"
      description="New review requests will show up here."
    />
  );
}
