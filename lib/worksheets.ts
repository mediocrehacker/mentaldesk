export function srcImg(isReady: boolean | undefined, slug: string) {
  if (isReady) {
    return `https://raw.githubusercontent.com/mediocrehacker/mentaldesk/main/src/app/content/worksheets/${slug}/original-1.png`
  } else {
    return "https://raw.githubusercontent.com/mediocrehacker/mentaldesk/main/public/worksheet_work_in_progress.png"
  }
}
