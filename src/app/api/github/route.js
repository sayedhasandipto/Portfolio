export const revalidate = 3600; // cache 1 hour

export async function GET() {
  const username = "sayedhasandipto";

  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "portfolio",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error(`GitHub ${res.status}`);

    const data = await res.json();

    return Response.json({
      repos: data.public_repos ?? 78,
      followers: data.followers ?? 3,
      following: data.following ?? 5,
      since: data.created_at ? new Date(data.created_at).getFullYear() : 2023,
    });
  } catch {
    // Fallback with REAL numbers, not zeros
    return Response.json({
      repos: 78,
      followers: 3,
      following: 5,
      since: 2023,
    });
  }
}
