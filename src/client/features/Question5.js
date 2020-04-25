import React from 'react'
import Highlight from 'react-highlight.js'

export const Question5 = () => {
  return (
    <div>
      <h2>Question 5</h2>
      <h4>SQL query (MS SQL Server)</h4>
      <Highlight className="sql">
        {`
SELECT *
FROM Players AS p
LEFT JOIN Countries AS c ON p.CountryId = c.Id
WHERE EXISTS (
    SELECT *
    FROM PlayerFavoriteGames AS fg
    INNER JOIN Games AS g ON fg.GameId = g.Id
    LEFT JOIN GameTypes AS gt ON g.GameTypeId = gt.Id
    WHERE p.Id = fg.PlayerId AND (
		gt.Name = N'SLOT' AND EXISTS (
			SELECT *
			FROM GameCountries AS gc
			WHERE gc.CountryId = c.Id AND gc.GameId = g.Id
		)
	)
)
        `}
      </Highlight>

      <h4>Database schema</h4>
      <img src="/images/schema.png" />

      <h4>Create database query (MS SQL Server)</h4>
      <Highlight className="sql">
        {`
CREATE DATABASE [CountriesTestApp]
GO

USE [CountriesTestApp]
GO

CREATE TABLE [dbo].[Countries](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](256) NULL,
	[Code] [nvarchar](3) NULL,
 CONSTRAINT [PK_Countries] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

CREATE TABLE [dbo].[GameCountries](
	[GameId] [int] NOT NULL,
	[CountryId] [int] NOT NULL,
 CONSTRAINT [PK_GameCountries] PRIMARY KEY CLUSTERED 
(
	[GameId] ASC,
	[CountryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

CREATE TABLE [dbo].[Games](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](256) NULL,
	[GameTypeId] [int] NULL,
 CONSTRAINT [PK_Games] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

CREATE TABLE [dbo].[GameTypes](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
 CONSTRAINT [PK_GameTypes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

CREATE TABLE [dbo].[PlayerFavoriteGames](
	[PlayerId] [int] NOT NULL,
	[GameId] [int] NOT NULL,
 CONSTRAINT [PK_PlayerFavoriteGames] PRIMARY KEY CLUSTERED 
(
	[PlayerId] ASC,
	[GameId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

CREATE TABLE [dbo].[Players](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](256) NULL,
	[LastName] [nvarchar](256) NULL,
	[CountryId] [int] NULL,
 CONSTRAINT [PK_Players] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[GameCountries]  WITH CHECK ADD  CONSTRAINT [FK_GameCountries_Countries_CountryId] FOREIGN KEY([CountryId])
REFERENCES [dbo].[Countries] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[GameCountries] CHECK CONSTRAINT [FK_GameCountries_Countries_CountryId]
GO

ALTER TABLE [dbo].[GameCountries]  WITH CHECK ADD  CONSTRAINT [FK_GameCountries_Games_GameId] FOREIGN KEY([GameId])
REFERENCES [dbo].[Games] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[GameCountries] CHECK CONSTRAINT [FK_GameCountries_Games_GameId]
GO

ALTER TABLE [dbo].[Games]  WITH CHECK ADD  CONSTRAINT [FK_Games_GameTypes_GameTypeId] FOREIGN KEY([GameTypeId])
REFERENCES [dbo].[GameTypes] ([Id])
GO

ALTER TABLE [dbo].[Games] CHECK CONSTRAINT [FK_Games_GameTypes_GameTypeId]
GO

ALTER TABLE [dbo].[PlayerFavoriteGames]  WITH CHECK ADD  CONSTRAINT [FK_PlayerFavoriteGames_Games_GameId] FOREIGN KEY([GameId])
REFERENCES [dbo].[Games] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[PlayerFavoriteGames] CHECK CONSTRAINT [FK_PlayerFavoriteGames_Games_GameId]
GO

ALTER TABLE [dbo].[PlayerFavoriteGames]  WITH CHECK ADD  CONSTRAINT [FK_PlayerFavoriteGames_Players_PlayerId] FOREIGN KEY([PlayerId])
REFERENCES [dbo].[Players] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[PlayerFavoriteGames] CHECK CONSTRAINT [FK_PlayerFavoriteGames_Players_PlayerId]
GO

ALTER TABLE [dbo].[Players]  WITH CHECK ADD  CONSTRAINT [FK_Players_Countries_CountryId] FOREIGN KEY([CountryId])
REFERENCES [dbo].[Countries] ([Id])
GO

ALTER TABLE [dbo].[Players] CHECK CONSTRAINT [FK_Players_Countries_CountryId]
GO
        `}
      </Highlight>
    </div>
  )
}
