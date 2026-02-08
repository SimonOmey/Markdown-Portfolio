import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <img class="page-title-icon" src="/static/icon.jpg" alt="Logo" />
        <span class="page-title-text">{title}</span>
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--headerFont);
  text-align: center;
}

.page-title a {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

.page-title-icon {
  display: block;
  margin: 0 auto 1rem auto;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
}

@media all and (max-width: 800px) {
  .page-title {
    text-align: left;
    margin-left: 2px;
  }

  .page-title a {
    flex-direction: row;
    align-items: center;
    gap: 0.8rem;
  }

  .page-title-icon {
    width: 35px;
    height: 35px;
    margin: 0;
  }

  .page-title-text {
    font-size: 1.2rem;
  }
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
